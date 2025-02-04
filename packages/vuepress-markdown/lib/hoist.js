module.exports = (md) => {
  const RE = /^<(script|style)(?=(\s|>|$))/i;

  md.renderer.rules.html_block = (tokens, idx) => {
    const content = tokens[idx].content;
    const hoistedTags = md.$data.hoistedTags || (md.$data.hoistedTags = []);
    if (RE.test(content.trim())) {
      hoistedTags.push(content);
      return "";
    } else {
      return content;
    }
  };
};
