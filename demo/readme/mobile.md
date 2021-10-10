```js
/_
尹跃腾
_/
@charset "UTF-8";
$yh: "Microsoft yahei";
@function Rm($px, $base: 28.125) {
	@return ($px / $base) * 1rem;
}
// @function pxToRemr($px, $base: 14.0625) {
//   @return ($px / $base) \* 1rem;
// }
html {
font-size: 62.5%;
font-family: $yh;
}
body,
textarea,
input,
select,
option {
color: #333;
font-family: "Hiragino Sans GB", "Microsoft Yahei", tahoma, arial, sans-serif;
-webkit-font-smoothing: antialiased;
-webkit-tap-highlight-color: transparent;
}
body,
h1,
h2,
h3,
h4,
h5,
h6,
blockquote,
ol,
ul,
dl,
dd,
p,
textarea,
input,
select,
option,
form {
margin: 0;
padding: 0;
}

ol,
ul,
textarea,
input,
option,
th,
td {
padding: 0;
}
.page {
min-width: 320px;
max-width: 750px;
margin: 0 auto;
}
h1,
h2,
h3,
h4,
h5,
h6 {
font-weight: normal;
font-size: 100%;
}
a,
select,
input,
textarea {
outline: none;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
menu,
nav,
section {
display: block;
}
table {
border-collapse: collapse;
border-spacing: 0;
}
ul,
ol {
list-style-type: none;
}
.hide {
display: none;
}
.show {
display: block;
}
.clearfix:after {
content: ".";
display: block;
height: 0;
clear: both;
visibility: hidden;
}
//.clearfix {_zoom:1;}
.clear {
clear: both;
height: 0;
overflow: hidden;
}
/_ ios 默认文本框阴影 _/
input[type="text"],
textarea {
-webkit-appearance: none;
}
/_ 低版本安卓文本框层级问题 _/
input:focus {
-webkit-user-modify: read-write-plaintext-only;
}
fieldset,
img {
border: 0;
}
a {
text-decoration: none;
}
a,
textarea,
input {
outline: none;
}
blockquote,
q {
quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
content: "";
content: none;
}
textarea {
overflow: auto;
resize: none;
}
// 以下是按照 320 下 12 像素字号走的，因为谷歌不识别小于 12 号字号
@media only screen and (min-width: 320px) {
html {
font-size: 75% !important; /_ 12÷16=75% _/
}
}
/\*\*
62.5% 10px;
640 150% 24px;
320 除以标准比例 640 再乘以 640 的基数 24 再除以 HTML 根据基数 16
320/640 _ 24 / 16 = 75%;
375/640 _ 24 / 16 = 87.89%;
414/640 _ 24 / 16 = 97.03%
_/
@media only screen and (min-width: 360px) {
html {
font-size: 84.3% !important; /_ 13.5÷16=84.3% _/
}
}
@media only screen and (min-width: 375px) {
html {
font-size: 87.890625% !important; /_ 14.0625÷16=87.890625% _/
}
}
@media only screen and (min-width: 384px) {
html {
font-size: 90% !important; /_ 14.4÷16=90% _/
}
}
@media only screen and (min-width: 390px) {
html {
font-size: 91.4% !important; /_ 14.625÷16=91.4% _/
}
}
@media only screen and (min-width: 412px) {
html {
font-size: 96.56% !important; /_ 15.45÷16=96.56% _/
}
}
@media only screen and (min-width: 414px) {
html {
font-size: 97.03% !important; /_ 15.525÷16=97.03% _/
}
}
@media only screen and (min-width: 480px) {
html {
font-size: 112.5% !important; /_ 18÷16=112.5% _/
}
}
@media only screen and (min-width: 560px) {
html {
font-size: 131.25% !important; /_ 21÷16=131.25% _/
}
}
@media only screen and (min-width: 640px) {
html {
font-size: 150% !important; /_ 24÷16=150% _/
}
}
@media only screen and (min-width: 720px) {
html {
font-size: 168.75% !important; /_ 27÷16=168.75% _/
}
}
@media only screen and (min-width: 750px) {
html {
font-size: 175.78125% !important; /_ 28.125÷16=175.78125% _/
}
}
// @media only screen and (min-width: 800px){
// html {
// font-size: 187.5%!important; /_ 30÷16=146.43% _/
// }
// }
// @media only screen and (min-width: 960px){
// html {
// font-size: 225%!important; /_ 36÷16=146.43% \*/
// }
// }
```
