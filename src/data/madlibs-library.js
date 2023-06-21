import clc from 'cli-color';

const getStorylines = () => {
    const storylines = [
        'Zoo Day',
        'Amusement Park',
    ];
    let output = `${clc.yellow('Available storylines:')}\n`;
    for (let i = 0; i < storylines.length; i += 1) {
        output += `${i + 1}. ${storylines[i]}\n`;
    }
    return output;
}

const getStory = (number) => {
    // zoo madlib
    const story1 = [
        '\nToday I went to the zoo. I saw a(n) (...)',
        '(...) jumping up and down in its tree.',
        '\nHe (...) through the large tunnel',
        'that led to its (...).',
        '\nI got some peanuts and passed them through the cage to a gigantic gray (...) towering above my head.',
        '\nFeeding that animal made me hungry. I went to get a (...) scoop of ice cream. It filled my stomach.',
        '\nAfterwards I had to (...)',
        'and (...) to catch our bus.',
        '\nWhen I got home I (...) my mom',
        'for a (...) day at the zoo.',
    ];
    // park madlib
    const story2 = [
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
    ]

    switch (number) {
        case '1':
            return story1;
        case '2':
            return story2;
        default:
            throw new Error(`Story value is invalid!`)
    }
}

export { getStory, getStorylines };
