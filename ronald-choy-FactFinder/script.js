var factform = document.querySelector("#factform");
var content = document.querySelector("#content");
factform.fact1.addEventListener("click",fact1);
factform.fact2.addEventListener("click",fact2);
factform.fact3.addEventListener("click",fact3);
factform.fact4.addEventListener("click",fact4);
factform.fact5.addEventListener("click",fact5);

function fact1() {
	content.innerHTML = "The meme \"Cheems\" originated from a post of a Shiba Inu on Instagram by a Hongkonger. The dog's real name is \"Balltze\"."
	+ "<img src='images/cheems.jpg'>";
}

function fact2() {
	content.innerHTML = "WASD as the movement controls in video games wasn't a standard until the late 90s when the player Thresh won in a Quake tournament with WASD as the movement keys. Everyone then copied him and it soon became the standard."
	+ "<img src='images/wasd.jpg'>";
}
function fact3() {
	content.innerHTML = "The most Super Chatted channel of all time on Youtube in June 2021 was a Japanese VTuber Kiryu Coco. Her revenue from Super Chats was at around CA$2.8 million. And the leaderboard was mostly dominated by members of the VTuber agency Hololive."
	+ "<br><br>Sad news however, Kiryu Coco will be \"graduating\" on 1st July 2021, meaning she will stop creating content."
	+ "<img src='images/superchats.png'>";
}
function fact4() {
	content.innerHTML = "Java and JavaScript are two different programming languages for different purposes. They are not related despite their names. This has caused many confusions for the unexperienced including myself initially.";
}
function fact5() {
	content.innerHTML = "Common fig is called \"no flower fruit\" in Chinese. However, the plant technically do flower. It is hidden inside the fig.";
}