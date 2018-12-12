function whoseBicycle(diary1, diary2, diary3) {
    var sumOne = 0;
    var sumTwo = 0;
    var sumThree = 0;
    const ageTable = {
            'firstSonAge': 14,
            'secondSonAge': 9,
            'thirdSonAge': 8
    }
    for(subject in diary1) {
      if(diary1.hasOwnProperty(subject)) {
        sumOne += parseFloat(diary1[subject]);
      }
    }
    for(subject in diary2) {
      if(diary2.hasOwnProperty(subject)) {
        sumTwo += parseFloat(diary2[subject]);
      }
    }
    for(subject in diary3) {
      if(diary3.hasOwnProperty(subject)) {
        sumThree += parseFloat(diary3[subject]);
      }
    }
    if(sumOne > sumTwo && sumOne > sumThree) {
        return 'I need to buy a bicycle for my first son.';
    }
    if(sumTwo > sumOne && sumTwo > sumThree || sumOne === sumTwo && sumOne > sumThree && sumTwo > sumThree) {
        return 'I need to buy a bicycle for my second son.';
    }
    if(sumThree > sumOne && sumThree > sumTwo || sumThree === sumTwo || sumThree === sumOne || sumTwo === sumOne === sumThree) {
        return 'I need to buy a bicycle for my third son.';
    }

}