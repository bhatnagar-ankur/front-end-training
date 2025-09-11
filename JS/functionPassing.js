function globalFunction(args) {
    console.log("Hello Global Function");
    console.log(args.innerFunc);
    console.log(args.outFunction);
    console.log(args.thirdArg);
}

function innerFunction() {
    console.log("Hello Inner Function");
    return "Inner Function Running";
}

function outerFunction() {
    console.log("Hello Outer Function");
    return 1001;
}

globalFunction({
    innerFunc: innerFunction(),
    outFunction: outerFunction(),
    thirdArg: "Hello Third Argument"
});

// globalFunction(innerFunction(), outerFunction(), "Hello Third Argument");
// globalFunction(outerFunction(), innerFunction(), "Hello Third Argument");