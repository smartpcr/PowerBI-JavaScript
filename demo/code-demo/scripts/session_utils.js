var _session = {};

const SessionKeys = {
    AccessToken : "accessToken",
    EmbedUrl : "embedUrl",
    EmbedId : "embedId",
};

function GetParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function SetSession(key, value) {
    // This is a temporal solution for session (which is cleared on reload). Should be replaced with a real session.
    //_session[key] = value;
    sessionStorage.setItem(key, value);
}

function GetSession(key) {
    // This is a temporal solution for session (which is cleared on reload). Should be replaced with a real session.
    return sessionStorage.getItem(key);
}

function UpdateSession(button, sessionKey) {
    var value = $(button).val();
    if (value)
    {
        SetSession(sessionKey, value);
    }
}

function SetTextBoxesFromSessionOrUrlParam(accessTokenSelector, embedUrlSelector, embedIdSelector) {
    var accessToken = GetParameterByName(SessionKeys.AccessToken);
    if (!accessToken)
    {
        accessToken = GetSession(SessionKeys.AccessToken);
    }

    var embedUrl = GetParameterByName(SessionKeys.EmbedUrl);
    if (!embedUrl)
    {
        embedUrl = GetSession(SessionKeys.EmbedUrl);
    }
    
    var embedId = GetParameterByName(SessionKeys.EmbedId);
    if (!embedId)
    {
        embedId = GetSession(SessionKeys.EmbedId);
    }

    $(accessTokenSelector).val(accessToken);
    $(embedUrlSelector).val(embedUrl);
    $(embedIdSelector).val(embedId);
}
