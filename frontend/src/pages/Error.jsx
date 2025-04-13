export function Error () {
    return <div>
        <main style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '40px',
            fontFamily : "Arial"
        }}>
        <h1 style={{
            fontSize: '36px',
            marginBottom: '10px'
        }}>
            ⚽ Oops! Page Not Found.
        </h1>
        <p style={{
            fontSize: '18px',
            color: '#333',
            marginBottom: '30px'
        }}>
            Looks like you kicked the ball out of bounds.
        </p>
        <div>
            <a href="/" style={{ 
                textDecoration: 'none',
                padding: '10px 20px',
                borderRadius: '8px',
                marginRight: '15px',
                fontWeight: 'bold', 
                backgroundColor: '#057a05',
                color: 'white'
            }}>
                Go Back Home
            </a>
            <a href="/login" style={{
                textDecoration: 'none',
                padding: '10px 20px',
                borderRadius: '8px',
                marginRight: '15px',
                fontWeight: 'bold', 
                backgroundColor: '#aef2b2',
                color: '#0a3d0a',
            }}>
                Login
            </a>
        </div>
      </main>
    </div>
}