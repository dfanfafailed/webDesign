<?php

// use \voku\helper\HtmlDomParser;
use voku\helper\HtmlDomParser;

require_once 'vendor/autoload.php';

$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, 'https://serayunews.com/search/sedekah-laut-cilacap');
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

$html = curl_exec($curl);
curl_close($curl);

$dom = HtmlDomParser::str_get_html($html);

$article = [];

foreach ($dom->find('div.card.d-inline-block.col-lg-6.col-md-6.col-sm-12.mb-4.pe-lg-3.pe-sm-0') as $key => $item) {
  $article[] = [
    'judul' => $item->find('h5 a')->innertext,
    'link' => $item->find('h5 a')->href,
    'gambar' => $item->find('img')->src
  ];
}
header('Content-type: application/json');
echo json_encode($article);
