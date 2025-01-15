const config = {
    user: "ADMIN",          // Substitua pelo nome do usuário
    password: "J0aoBigBoss2023!",        // Substitua pela senha do usuário
    connectString: `(description=
      (retry_count=20)
      (retry_delay=3)
      (address=(protocol=tcps)(port=1522)(host=adb.sa-saopaulo-1.oraclecloud.com))
      (connect_data=(service_name=gaabc5f04ea538c_beupfit_high.adb.oraclecloud.com))
      (security=(ssl_server_dn_match=yes)))`,
    ssl: {
      rejectUnauthorized: true,
    },
  };
  
  module.exports = config;
  