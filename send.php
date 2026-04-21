<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://finguide.kz');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false]);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

$name    = htmlspecialchars(trim($input['name']    ?? ''));
$city    = htmlspecialchars(trim($input['city']    ?? ''));
$phone   = htmlspecialchars(trim($input['phone']   ?? ''));
$review  = htmlspecialchars(trim($input['review']  ?? ''));
$subject = htmlspecialchars(trim($input['subject'] ?? 'Заявка'));

if (!$name || !$phone) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Missing fields']);
    exit;
}

$BOT_TOKEN = '5565441501:AAH4Rk9J9GSuEC-M0tCQKh0dse8rkN2w57Y';
$CHAT_ID   = '-5163434578';

// Build WhatsApp link from phone (strip non-digits, ensure starts with 7)
$digits = preg_replace('/\D/', '', $phone);
if (strlen($digits) === 11 && $digits[0] === '8') {
    $digits = '7' . substr($digits, 1);
}
$waLink = "https://wa.me/{$digits}";

$text = "📩 <b>{$subject}</b>\n\n"
      . "👤 <b>Имя:</b> {$name}\n"
      . "📞 <b>Тел:</b> <a href=\"{$waLink}\">{$phone}</a>\n";

if ($city)   $text .= "🏙 <b>Город:</b> {$city}\n";
if ($review) $text .= "💬 <b>Отзыв:</b> {$review}";

$payload = json_encode([
    'chat_id'    => $CHAT_ID,
    'text'       => $text,
    'parse_mode' => 'HTML',
]);

$ch = curl_init("https://api.telegram.org/bot{$BOT_TOKEN}/sendMessage");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
$result = curl_exec($ch);
$err    = curl_error($ch);
curl_close($ch);

if ($err) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => $err]);
    exit;
}

$response = json_decode($result, true);
echo json_encode(['ok' => $response['ok'] ?? false]);
