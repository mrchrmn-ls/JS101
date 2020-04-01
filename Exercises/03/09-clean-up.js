const cleanUp = text =>
                text.replace(/[^a-z]/gi, " ").replace(/\s+/gi, " ");

cleanUp("---what's my +*& line?");    // " what s my line "