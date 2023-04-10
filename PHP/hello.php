<?php
// echo "Hello";
// echo 5+3;
// echo 5-3;
// echo 5*3;
// echo 5/3;

// print("Hello Everyone !")
// print('Hi,'.'My '.'name '.'is '.'Tushar')

/* $var = echo('Hello');
echo $var;   -> This is getting error*/

/* $var = print('Hello');
print $var;   -> Correct and run but print return after word 1.
echo > print (fast) */

/* $num1 = 20;
$num2 = 10;
$mul = $num1*$num2;
echo "Multiplication: {$mul}\n";
echo "Result : ". ($num1+$num2); */

/* define("NAME", "Hello, My name is Tushar Ahmed");
echo NAME; */

/* $name = 'My name is Tushar';
var_dump($name); */
// var_dump(10.26363);
/* $fruits = ['banana', 'apple', 11];
var_dump($fruits); */
/* class student{
}
$stu = new student();
var_dump($stu); */

// echo __FILE__;
// echo __LINE__;

/* $x = 3;
$y = 2;
// $res = $x ** $y;
// echo $res;
$x += $y;
echo $x; */

/* $x = 2;
// $y = 3;
$y = '2';
// var_dump($x == $y);
// var_dump($x === $y);
var_dump($x <> $y); */

/* $var = 12;
echo gettype($var); */

/* $x = 10;
echo $x++;
echo "\n";
echo $x; */

/* $version = `php -v`;
echo $version; */


/* for($i = 0; $i <= 10; $i++){
    echo "$i";
    echo PHP_EOL;
} */


/* $x = 12;
$y = 10;
if($x > $y){
    echo "Hello,".$x." is larger than "."$y";
}
else{
    echo "Bye";
} */

/* $i = 1;
while($i <= 10){
    echo $i;
    echo PHP_EOL;
    $i++;
} */

/* $i = 1;
while($i <= 10):
    echo $i;
    echo PHP_EOL;
    $i++;
endwhile; */


/* $names = ['Tushar', 'Maruf', 'Onik', 'Rifat', 'Rabby'];
foreach($names as $name){
    echo $name;
    echo PHP_EOL;
} */


/* $names = [
    "name" => "Tushar",
    "age" => 22,
    "Address" => "Tangail",
];
foreach($names as $key => $value){
    // echo $key;
    echo $value;
    echo PHP_EOL;
} */

/* for($i=0;$i<5;$i++){
    for($j=0; $j<$i; $j++){
        echo "*";
    }
    echo PHP_EOL;
} */


$language = 'PHP';
switch($language){
    case 'PHP':
        echo "My favourite language is PHP";
        break;
    case 'JS':
        echo "My favourite language is JS";
        break;
    case 'Python':
        echo "My favourite language is Python";
        break;
    default:
        echo "I don't like programming";
        break;

}

?>
