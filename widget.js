(() => {
    (async function(s) {
        var n;
        const e = 'YBZL2kbOg';  // Atribuição direta de 'YBZL2kbOg' a 'e'

        const a = `https://empreender.nyc3.digitaloceanspaces.com/BOTAOZAP/public/settings/${(() => {
            if (typeof LS == "object" && typeof LS.store == "object") return "nuvem_shop";
            if (typeof Shopify == "object" && Shopify.shop) return "shopify";
            if (typeof Cartpanda == "object" && slug) return "cartpanda";
            if (typeof woocommerce_params == "object" || typeof wp == "object") return "woo_commerce";
            switch (String(e)[0]) {
                case "Y":
                    return "yampi";
                case "L":
                    return "loja_integrada";
            }
            return "custom_store";
        })()}-${e}.json`;

        const i = `https://empreender.nyc3.cdn.digitaloceanspaces.com/BOTAOZAP/plugins/providers/others/widget_factory.js?store=${e}`;

        const t = await (await fetch(a)).json();
        if (t != null && t.store && (n = t.widgets) != null && n.length) {
            const r = document.createElement("script");
            r.onload = function() {
                for (const o of t.widgets.map(p => ({
                        _token: e,
                        ...p.data
                    }))) s._Empreender.BZ.wa__widget_factory(o)
            };
            r.type = "text/javascript";
            r.src = i;
            s.document.body.appendChild(r);
        }
    })(window);
})();
