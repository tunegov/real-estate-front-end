import URLSafeBase64 from 'urlsafe-base64';

function JWTPaylodeDecode(jwtData) {
  if (!jwtData || typeof jwtData !== 'string') {
    throw new Error('function "decodeJWTPayload" must recieve a string argument');
  }
  let payload;

  try {
    const tempPayload = jwtData.split('.')[1];
    const payloadBuffer = URLSafeBase64.decode(tempPayload);
    payload = JSON.parse(payloadBuffer.toString());
    console.log(payload);
  } catch (err) {
    console.log(err);
  }
  return payload;
}

export { JWTPaylodeDecode };
