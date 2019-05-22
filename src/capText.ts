function capText(text: string, maxLength: number, suffix?: string): string {
  if (text.length > maxLength) {
    return (
      text.substr(0, maxLength) + (typeof suffix === "string" ? suffix : "")
    );
  }

  return text;
}

export default capText;
