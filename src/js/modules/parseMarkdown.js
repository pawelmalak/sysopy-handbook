import Showdown from 'showdown';

export const parseMarkdown = (sourceString) => {

  const parser = new Showdown.Converter({
    omitExtraWLInCodeBlocks: true,
    headerLevelStart: 3,
    smartIndentationFix: true,
    simpleLineBreaks: true
  });

  const markdownInput = JSON.parse(sourceString);
  const htmlOutput = parser.makeHtml(markdownInput);

  return htmlOutput;

}