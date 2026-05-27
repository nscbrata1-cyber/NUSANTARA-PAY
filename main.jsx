
import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
function App(){
return <div className="app"><h1>NUSANTARA PAY</h1><div className="card"><p>Saldo Anda</p><h2>Rp1.250.000</h2></div><div className="grid"><button>Kirim</button><button>Top Up</button><button>QR Bayar</button><button>Riwayat</button></div></div>}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>)
