const StringHelper = {}

StringHelper.displayEmoji = emoji => String.fromCodePoint(emoji.codePointAt(0));

export default StringHelper;
