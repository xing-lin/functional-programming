{
  function saveComment(txt) {
    if (txt !== "") {
      comments[comments.length] = txt;
    }
  }

  function trackEvent(evt) {
    if (evt.name !== undefined) {
      events[evt.name] = evt;
    }
  }
}

{
  function storeData(store, location, value) {
    store[location] = value;
  }

  function saveComment(txt) {
    if (txt !== "") {
      storeData(comments, comments.length, txt);
    }
  }

  function trackEvent(evt) {
    if (evt.name !== undefined) {
      storeData(events, evt.name, evt);
    }
  }
}
