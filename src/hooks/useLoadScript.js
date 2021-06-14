export const initScripts = (url, id, callback) => {
    if (!isScriptLoaded(url)) {
        loadScript(url, id, () => {
            callback();
        });
    }
};

const loadScript = (url, id, callback) => {
    if (document) {
        let script = document.createElement('script');
        script.type = 'text/javascript';

        if (id) {
            script.id = id;
        }

        script.async = true;
        script.defer = true;

        if (script.readyState) {
            script.onreadystatechange = function () {
                if (script.readyState === 'loaded' || script.readyState === 'complete') {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else {
            script.onload = () => callback();
        }

        script.src = url;
        document.getElementsByTagName('head')[0].appendChild(script);
    } else {
        callback();
    }
};

const isScriptLoaded = (url) => {
    let scripts = document ? document.getElementsByTagName('script') : [];
    for (let i = scripts.length; i--;) {
        if (scripts[i].src == url) return true;
    }
    return false;
};
