<?php
// Path to HTML-file with works
define('HTML_PORTFOLIO_PATH', __DIR__ . '/portfolio_content.html');
define('DEFAULT_LIMIT', 2);

$offset = empty($_REQUEST['offset']) ? 0 : (int)$_REQUEST['offset'];
$limit = empty($_REQUEST['limit']) ? DEFAULT_LIMIT : (int)$_REQUEST['limit'];

$document = new DOMDocument();
$document->loadHTMLFile(HTML_PORTFOLIO_PATH);

$xpath = new DOMXpath($document);
$elements = $xpath->query('body/div');

/** @var DOMElement[] $slice */
$slice = array();
$i = 0;
foreach ($elements as $key => $element) {
    if ($i >= $offset && count($slice) < $limit) {
        $slice[] = $element;
    }
    $i++;
}

$result = '';
foreach ($slice as $node) {
    $result .= $document->saveHTML($node);
}

echo $result;