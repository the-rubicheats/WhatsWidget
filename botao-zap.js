(()=>{(async function(s){var n;const e=(()=>{if(typeof LS=="object"&&typeof LS.store=="object")return LS.store.id;if(typeof Cartpanda=="object"&&slug)return slug;const o=new URL(s.document.currentScript.src);return o.searchParams.get("store")||o.searchParams.get("shop")})();if(!e)return;const a=`https://empreender.nyc3.digitaloceanspaces.com/BOTAOZAP/public/settings/${(()=>{if(typeof LS=="object"&&typeof LS.store=="object")return"nuvem_shop";if(typeof Shopify=="object"&&Shopify.shop)return"shopify";if(typeof Cartpanda=="object"&&slug)return"cartpanda";if(typeof woocommerce_params=="object"||typeof wp=="object")return"woo_commerce";switch(String(e)[0]){case"Y":return"yampi";case"L":return"loja_integrada"}return"custom_store"})()}-${e}.json`,i=`https://empreender.nyc3.cdn.digitaloceanspaces.com/BOTAOZAP/plugins/providers/others/widget_factory.js?store=${e}`,t=await(await fetch(a)).json(),c=new Date(t.store.subscription.expires_at);if(c.setUTCDate(c.getUTCDate()+30),!(t!=null&&t.store)||!((n=t.widgets)!=null&&n.length)||Date.now()>c.getTime())return;const r=document.createElement("script");r.onload=function(){for(const o of t.widgets.map(p=>({_token:e,...p.data})))s._Empreender.BZ.wa__widget_factory(o)},r.type="text/javascript",r.src=i,s.document.body.appendChild(r)})(window);
})();
