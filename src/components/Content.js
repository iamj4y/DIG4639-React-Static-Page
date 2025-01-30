export function sendContents () {
    var contentTxt1 = `The Three Little Pigs is a classic fairy tale about three pig siblings who each build a house to protect themselves from the Big Bad Wolf. The first pig constructs his house from straw, while the second uses sticks, both opting for quick and easy solutions. However, the Big Bad Wolf easily blows down their fragile homes, forcing them to flee. Meanwhile, the third pig, who takes the time to build a sturdy house out of bricks, successfully withstands the wolf’s huffing and puffing, keeping him at bay.`;
    var contentTxt2 = `In the end, the wolf attempts to sneak into the brick house through the chimney, but the clever third pig outsmarts him by placing a pot of boiling water at the bottom. The wolf either burns himself and runs away or, in some versions, falls in and meets his demise.`;
    var paraArr = [];
    paraArr.push(contentTxt1);
    paraArr.push(contentTxt2);
    return paraArr;
}