import { ImageResponse } from 'next/og';

export const alt = 'Lhopital-FR - Equipos de Rescate y Emergencias';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #b01f29 0%, #8b1a1a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          fontFamily: 'system-ui',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            color: 'white',
            textAlign: 'center',
            padding: '40px',
          }}
        >
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              margin: '0 0 20px 0',
              lineHeight: '1.1',
            }}
          >
            Lhopital-FR
          </h1>
          <p
            style={{
              fontSize: '32px',
              margin: '0 0 30px 0',
              opacity: 0.9,
              maxWidth: '800px',
            }}
          >
            Equipos de Rescate y Emergencias en México
          </p>
          <div
            style={{
              display: 'flex',
              gap: '30px',
              fontSize: '24px',
              opacity: 0.8,
            }}
          >
            <span>🚒 Rescate Técnico</span>
            <span>🦺 Protección Personal</span>
            <span>⚠️ HAZMAT</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}