function evenSizedString(str) {
    const sized = str.length;
    console.log(str, sized);
    if (sized % 2 === 0) {
        console.log("Even size")
    }
    else {
        console.log("Odd size");
    }
}
evenSizedString("Dhaka");
evenSizedString("Rangpur");