<?php
    $callback = isset($_GET["callback"]) ? $_GET["callback"] : false;
    // conexão banco de dados
    $c = mysqli_connect("localhost:3325","root","","intercodedb");
    // consulta tabela clientes
    $cc = "SELECT nome,imagem FROM clientes";
    // resultado
    $rp = mysqli_query($c,$cc);
    $retorno = array();
    while($linha = mysqli_fetch_object($rp)) {
        $retorno[] = $linha;
    }
    // se callback está definido, então escreve nome da função + dados json
    // senão escreve dados json apenas
    echo ($callback ? $callback . "(" : "") . json_encode($retorno) . ($callback ? ")" : "");
    // relembrando: json_encode($retorno) converte os dados da consulta (array associativo) para o formato JSON
    mysqli_free_result($rp);
    mysqli_close($c);
?>