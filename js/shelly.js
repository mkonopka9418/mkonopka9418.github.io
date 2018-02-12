$(document).ready(function(){

	var left = [];
	var right = [];

	left['first-pic'] = "I spend a lot of time climbing indoors at Earth Treks and outdoors in Clear Creek Canyon";
	left['second-pic'] = "Fitness and wellness are both a huge part of my life. Good health doesn't work without good food so I spend a lot of time preparing delicious and health meals.";
	left['third-pic'] = "Snowboarding is what really sold me on the mountains. I love spending time in the outdors during the summer while hiking and camping but nothing beats cruising through powder on my board.";

	right['first-pic'] = "If you'd have met me five years ago, I'd have told you all about my aspirations to change the lives of students as a high school mathematics teacher. Once I landed my first job, I quickly realized that teaching math was much less fun for me than doing math. I started sould searching and stumbled upon computer science. After writing my first few programs, I dove in head first and never looked back."
	right['second-pic'] = "I'll graduate this Spring(May 2018) from Colorado School of Mines with a graduate degree in Computer Science. Woohoo! Can't wait!"
	right['third-pic'] = "While at Mines, I've worked on a variety of outreach programs. I've helped develop and lead CS summer teacher trainings, CS middle school summer camps and helped start and lead the CS@Mines On Tour program. I also did work with CSUnplugged@Mines and spent many evenings working as a lead with the all girl's after school program, DECTech."

	$(".left-col").click(function(e){
		$("#mid-mid").text(left[e.target.id]);
		$(".middle-col #mid-mid").css("font-size", "1em");
		var i = ".left-col" + " #" + e.target.id;
		$(i).css({opacity: 0.5});
	});

	$(".right-col").click(function(e){
		$("#mid-mid").text(right[e.target.id]);
		$(".middle-col #mid-mid").css("font-size", "1em");
		var i = ".right-col" + " #" + e.target.id;
		$(i).css({opacity: 0.5});
	});

});