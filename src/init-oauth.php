<?php

$discord_url = "{https://discord.com/api/oauth2/authorize?client_id=933643339755032577&redirect_uri=https%3A%2F%2Flocalhost%2Fyt-discord%2Fsrc%2Fprocess-oauth.php&response_type=code&scope=identify%20rpc.voice.read}";
header("Location: $discord_url");
exit();

?>