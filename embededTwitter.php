<?php
$profile_one = '<a class="twitter-timeline" data-theme="dark" href="https://twitter.com/TheArcadeMelb?ref_src=twsrc%5Etfw">Tweets by TheArcadeMelb</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';

$profile_two = '<a class="twitter-timeline" data-theme="dark" href="https://twitter.com/AaronsArcade?ref_src=twsrc%5Etfw">Tweets by AaronsArcade</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';

$profile_three = '<a class="twitter-timeline" data-theme="dark" href="https://twitter.com/nwpinballshow?ref_src=twsrc%5Etfw">Tweets by nwpinballshow</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';

$profile_five = '<a class="twitter-timeline" data-theme="dark" href="https://twitter.com/vrarcadegames?ref_src=twsrc%5Etfw">Tweets by vrarcadegames</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';

$profile_six = '<a class="twitter-timeline" data-theme="dark" href="https://twitter.com/GameroomBlog?ref_src=twsrc%5Etfw">Tweets by GameroomBlog</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';

$profile_seven = '<a class="twitter-timeline" data-theme="dark" href="https://twitter.com/LoganArcade?ref_src=twsrc%5Etfw">Tweets by LoganArcade</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';

$profiles = array($profile_one, $profile_two, $profile_three, $profile_five, $profile_six, $profile_seven);

$what_profile = rand(0, 5);

for ($i = 0;$i < 6;$i++)
{
  if ($what_profile == $i)
  {
    echo $profiles[$i];
  }
}
?>
