<?php

function ArrayAscendingOrder($array){
    $result = [];
    for ($i=0; $i < count($array)-1; $i++){
        echo $i;
        if ($array[$i] < $array[$i+1] && $array[$i+1] <= count($array)) {
            $value = $array[$i+1];
            array_push($result,$value);
        }
    }
    print_r($result);
}
ArrayAscendingOrder([1,2,3]);