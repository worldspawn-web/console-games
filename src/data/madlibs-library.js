import clc from 'cli-color';

const getStorylines = () => {
  const storylines = [
    'Zoo Day',
    'The Fun Park',
    'At the Arcade',
    'The First Day of School',
    'In the Jungle',
    'LAN Internet Cafe',
  ];
  let output = `${clc.yellow('Available storylines:')}\n`;
  for (let i = 0; i < storylines.length; i += 1) {
    output += `${i + 1}. ${storylines[i]}\n`;
  }
  return output;
};

const stories = {
  1: [
    '\nToday I went to the zoo. I saw a(n) (...) jumping up and down in its tree.',
    '\nHe (...) through the large tunnel',
    'that led to its (...).',
    '\nI got some peanuts and passed them through the cage to a gigantic gray (...) towering above my head.',
    '\nFeeding that animal made me hungry. I went to get a (...) scoop of ice cream. It filled my stomach.',
    '\nAfterwards I had to (...)',
    'and (...) to catch our bus.',
    '\nWhen I got home I (...) my mom',
    'for a (...) day at the zoo.',
  ],
  2: [
    '\nToday, my fabulous camp group went to a(an) (...) amusement park.',
    '\nIt was a fun park with lots of cool (...) and enjoyable play structures.',
    '\nWhen we got there, my kind counselor shouted loudly, "Everybody off the (...)!"',
    '\nWe all pushed out in a terrible hurry. My counselor handed out yellow tickets, and we scurried in. I was so excited! I could not figure out what exciting thing to do first. I saw a scary roller coaster I really liked so, I (...) ran over to get...',
    'in a long line that had about (...) people in it.',
    '\nWhen I finally got on the roller coaster I was (...).',
    '\nIn fact I was so nervous my two knees were knocking together. This was the (...) ride I had ever been on!',
    '\nIn about two minutes I heard the crank and grinding of the gears. That is when the ride began! When I got to the bottom, I was a little (...) but I was proud of myself.',
    '\nThe rest of the day went (...).',
    '\nIt was a(n) (...) day at the fun park.',
  ],
  3: [
    '\nWhen I go to the arcade with my (...) there are lots of games to play.',
    '\nI spend lots of time there with my friends. In the game X-Men you can be different (...).',
    '\nThe point of the game is to (...) every robot.',
    '\nYou also need to save people. Then you can go to the next level.\n\nIn the game Star Wars you are Luke Skywalker and you try to destroy every (...).',
    '\nIn a car racing/motorcycle racing game you need to beat every computerized vehicle that you are (...) against.',
    '\nThere are a whole lot of other cool games. When you play some games you win (...) for certain scores.',
    '\nOnce you are done - you can cash in your tickets to get a big (...)',
    '\nYou can save your (...) for another time.',
    '\nWhen I went to this arcade I did not believe how much (...) it would be. So far I have had a lot of fun every time I have been to this great arcade!',
  ],
  4: [
    '\nOne very nice morning near the end of summer, my mother woke me up at 4:00 A.M. and said:\n\n- Wake up and smell the grass, sleepy head! Today is your first day of school and you can not be late!\n\nI groaned in my bed for twenty seconds, but eventually I got dressed.\nI wore a blue and white striped, long sleeve (...) with a collar on it, a red tie, dark grey pants, white socks, black shoes.',
    '\nAlso I had a (...) hat.',
    '\nIn ten minutes I made a lunch and ate my breakfast. (...) minutes later, the bus came.',
    '\n(...) later, I was at school.',
    '\n\nIn school, I met two really (...) kids.',
    '\nAll of us became friends very fast. That day we had Science, and luckily my friends and I were at the same (...).',
    '\nFirst guy name was (...).',
    '\nSecond - (...).',
    '\nIn Math we were not together, and that really bugged me. We learned what (...) were, and when to use them.',
    '\nAt snack and recess, we played (...) together. It was extremely fun.',
    '\nAt P.E., we were (...) off of the ropes',
    '\nonto (...).',
    '\nI thought it was a very (...) idea.',
    '\nIn swimming class, we needed to swim extremely (...), or else we would have to swim longer.',
    '\nBefore I knew it, school was over. I grabbed all my belongings and put them into my backpack. In two minutes, the bus came. As I stepped into the bus I shouted:\n"(...)" to my friends. Then I went into the bus. In a flash, I was back home. This day was an extremely exciting day!',
  ],
  5: [
    '\nI walk through the color jungle. I take out my (...) canteen.',
    '\nThere is a (...) parrot.',
    '...with a (...) in hist mouth right there in front of me.',
    '\nI gaze at his (...).',
    '\nA sudden sound awakes me from my daydream! A panthers (...) in front of my head.',
    '\nI (...) his breath...',
    '\nI remember I have a packet of (...) that makes go into a deep slumber!',
    '\nI (...) it away from me in front of the panther.',
    '\nYes! He is eating it! I (...) away through the jungle.',
    '\nI meet (...) at the tent. Phew! It was an exciting day in the jungle',
  ],
  6: [
    '\nToday is Wednesday. The most boring day we have at school. I had around (...) dollars in my pocket, so I decided to visit internet cafe instead.',
    '\nIn about (...) minutes I was there.',
    '\nThe cafe was fogged, because it was not prohibited to (...) inside.',
    '\nAdmin asked for how long I want to stay:\n- (...) hours, I think.',
    '\nAfter that, I immediately gave him (...) and received my PC number.',
    '\nEven though the PC was (...), the fps counter was average.',
    '\nOld yellow keyboard was (...) and the mouse was nearly destroyed, but I did not care.\n - It is still better than Math at school.',
    '\nThere was several games on PC desktop. All of them were old, but gold. I decided to play (...)',
    '\n(...) started. I quickly adjusted the settings and hop on community servers.',
    '\nThere was several LAN servers available. Probably those smokers were playing (...)',
    '\nI decided to join and (...).',
    '\nAfter I annihilated some of them in the first match, they (...).',
    '\nI came back home with no money, no phone, no (...). Today was a good day...',
  ],
};

const getStory = (number) => {
  if (stories[number]) {
    return stories[number];
  } else {
    throw new Error(`${number} value is invalid!`);
  }
};

export { getStory, getStorylines };
