import{_ as s,c as n,o as a,a as l}from"./app.ab371bcb.js";const u=JSON.parse('{"title":"Usage with Nuxt3","description":"","frontmatter":{},"headers":[{"level":2,"title":"Installation","slug":"installation","link":"#installation","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Choosing a storage","slug":"choosing-a-storage","link":"#choosing-a-storage","children":[{"level":3,"title":"localStorage","slug":"localstorage","link":"#localstorage","children":[]},{"level":3,"title":"sessionStorage","slug":"sessionstorage","link":"#sessionstorage","children":[]},{"level":3,"title":"cookiesWithOptions","slug":"cookieswithoptions","link":"#cookieswithoptions","children":[]}]},{"level":2,"title":"Global options","slug":"global-options","link":"#global-options","children":[]}],"relativePath":"frameworks/nuxt-3.md","lastUpdated":1672143809000}'),p={name:"frameworks/nuxt-3.md"},o=l(`<h1 id="usage-with-nuxt3" tabindex="-1">Usage with Nuxt3 <a class="header-anchor" href="#usage-with-nuxt3" aria-hidden="true">#</a></h1><p>Persisting pinia stores in Nuxt is easier thanks to the dedicated module.</p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h2><ol><li><p>Install the dependency with your favorite package manager:</p><ul><li>pnpm:</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#80A665;">pnpm</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">i</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">-D</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">@pinia-plugin-persistedstate/nuxt</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#59873A;">pnpm</span><span style="color:#393A34;"> </span><span style="color:#B56959;">i</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">-D</span><span style="color:#393A34;"> </span><span style="color:#B56959;">@pinia-plugin-persistedstate/nuxt</span></span>
<span class="line"></span></code></pre></div><ul><li>npm:</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#80A665;">npm</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">i</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">-D</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">@pinia-plugin-persistedstate/nuxt</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#59873A;">npm</span><span style="color:#393A34;"> </span><span style="color:#B56959;">i</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">-D</span><span style="color:#393A34;"> </span><span style="color:#B56959;">@pinia-plugin-persistedstate/nuxt</span></span>
<span class="line"></span></code></pre></div><ul><li>yarn:</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#80A665;">yarn</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">add</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">-D</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">@pinia-plugin-persistedstate/nuxt</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#59873A;">yarn</span><span style="color:#393A34;"> </span><span style="color:#B56959;">add</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">-D</span><span style="color:#393A34;"> </span><span style="color:#B56959;">@pinia-plugin-persistedstate/nuxt</span></span>
<span class="line"></span></code></pre></div></li><li><p>Add the module to the Nuxt config (<code>nuxt.config.ts</code>):</p></li></ol><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">default</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">defineNuxtConfig</span><span style="color:#666666;">({</span></span>
<span class="line"><span style="color:#666666;">  </span><span style="color:#B8A965;">modules</span><span style="color:#666666;">: [</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">@pinia/nuxt</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">@pinia-plugin-persistedstate/nuxt</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#666666;">  ],</span></span>
<span class="line"><span style="color:#666666;">})</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">default</span><span style="color:#393A34;"> </span><span style="color:#59873A;">defineNuxtConfig</span><span style="color:#999999;">({</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#998418;">modules</span><span style="color:#999999;">: [</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">@pinia/nuxt</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">@pinia-plugin-persistedstate/nuxt</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#999999;">  ],</span></span>
<span class="line"><span style="color:#999999;">})</span></span>
<span class="line"></span></code></pre></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><p>When declaring your store, set the new <code>persist</code> option to <code>true</code>.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">defineStore</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">pinia</span><span style="color:#C98A7DAA;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#CB7676;"> const </span><span style="color:#BD976A;">useStore</span><span style="color:#CB7676;"> = </span><span style="color:#80A665;">defineStore</span><span style="color:#666666;">(</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">main</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">,</span><span style="color:#CB7676;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#666666;">  </span><span style="color:#80A665;">state</span><span style="color:#666666;">: () =&gt; {</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#4D9375;">return</span><span style="color:#666666;"> {</span></span>
<span class="line"><span style="color:#666666;">      </span><span style="color:#B8A965;">someState</span><span style="color:#666666;">: </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">hello pinia</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#666666;">    }</span></span>
<span class="line"><span style="color:#666666;">  },</span></span>
<span class="line"><span style="color:#666666;">  </span><span style="color:#B8A965;">persist</span><span style="color:#666666;">: </span><span style="color:#4D9375;">true</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#666666;">})</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">defineStore</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">pinia</span><span style="color:#B56959AA;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1E754F;">export</span><span style="color:#AB5959;"> const </span><span style="color:#B07D48;">useStore</span><span style="color:#AB5959;"> = </span><span style="color:#59873A;">defineStore</span><span style="color:#999999;">(</span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">main</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">,</span><span style="color:#AB5959;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#59873A;">state</span><span style="color:#999999;">: () =&gt; {</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#1E754F;">return</span><span style="color:#999999;"> {</span></span>
<span class="line"><span style="color:#999999;">      </span><span style="color:#998418;">someState</span><span style="color:#999999;">: </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">hello pinia</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#999999;">    }</span></span>
<span class="line"><span style="color:#999999;">  },</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#998418;">persist</span><span style="color:#999999;">: </span><span style="color:#1E754F;">true</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#999999;">})</span></span>
<span class="line"></span></code></pre></div><h2 id="choosing-a-storage" tabindex="-1">Choosing a storage <a class="header-anchor" href="#choosing-a-storage" aria-hidden="true">#</a></h2><p>By default, your stores will be persisted in cookies (using Nuxt&#39;s <a href="https://nuxt.com/docs/api/composables/use-cookie" target="_blank" rel="noreferrer"><code>useCookie</code></a> under the hood). You can configure what storage you want to use by using the storages available under the auto-imported <code>persistedState</code> variable.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Using other storages than the ones exposed by <code>persistedState</code> may have unexpected behaviors.</p></div><h3 id="localstorage" tabindex="-1"><code>localStorage</code> <a class="header-anchor" href="#localstorage" aria-hidden="true">#</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">defineStore</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">pinia</span><span style="color:#C98A7DAA;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#CB7676;"> const </span><span style="color:#BD976A;">useStore</span><span style="color:#CB7676;"> = </span><span style="color:#80A665;">defineStore</span><span style="color:#666666;">(</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">main</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">,</span><span style="color:#CB7676;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#666666;">  </span><span style="color:#80A665;">state</span><span style="color:#666666;">: () =&gt; {</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#4D9375;">return</span><span style="color:#666666;"> {</span></span>
<span class="line"><span style="color:#666666;">      </span><span style="color:#B8A965;">someState</span><span style="color:#666666;">: </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">hello pinia</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#666666;">    }</span></span>
<span class="line"><span style="color:#666666;">  },</span></span>
<span class="line"><span style="color:#666666;">  </span><span style="color:#B8A965;">persist</span><span style="color:#666666;">: {</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#B8A965;">storage</span><span style="color:#666666;">: </span><span style="color:#BD976A;">persistedState</span><span style="color:#666666;">.</span><span style="color:#BD976A;">localStorage</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#666666;">  },</span></span>
<span class="line"><span style="color:#666666;">})</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">defineStore</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">pinia</span><span style="color:#B56959AA;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1E754F;">export</span><span style="color:#AB5959;"> const </span><span style="color:#B07D48;">useStore</span><span style="color:#AB5959;"> = </span><span style="color:#59873A;">defineStore</span><span style="color:#999999;">(</span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">main</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">,</span><span style="color:#AB5959;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#59873A;">state</span><span style="color:#999999;">: () =&gt; {</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#1E754F;">return</span><span style="color:#999999;"> {</span></span>
<span class="line"><span style="color:#999999;">      </span><span style="color:#998418;">someState</span><span style="color:#999999;">: </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">hello pinia</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#999999;">    }</span></span>
<span class="line"><span style="color:#999999;">  },</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#998418;">persist</span><span style="color:#999999;">: {</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#998418;">storage</span><span style="color:#999999;">: </span><span style="color:#B07D48;">persistedState</span><span style="color:#999999;">.</span><span style="color:#B07D48;">localStorage</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#999999;">  },</span></span>
<span class="line"><span style="color:#999999;">})</span></span>
<span class="line"></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><code>localStorage</code> is client side only.</p></div><h3 id="sessionstorage" tabindex="-1"><code>sessionStorage</code> <a class="header-anchor" href="#sessionstorage" aria-hidden="true">#</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">defineStore</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">pinia</span><span style="color:#C98A7DAA;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#CB7676;"> const </span><span style="color:#BD976A;">useStore</span><span style="color:#CB7676;"> = </span><span style="color:#80A665;">defineStore</span><span style="color:#666666;">(</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">main</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">,</span><span style="color:#CB7676;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#666666;">  </span><span style="color:#80A665;">state</span><span style="color:#666666;">: () =&gt; {</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#4D9375;">return</span><span style="color:#666666;"> {</span></span>
<span class="line"><span style="color:#666666;">      </span><span style="color:#B8A965;">someState</span><span style="color:#666666;">: </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">hello pinia</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#666666;">    }</span></span>
<span class="line"><span style="color:#666666;">  },</span></span>
<span class="line"><span style="color:#666666;">  </span><span style="color:#B8A965;">persist</span><span style="color:#666666;">: {</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#B8A965;">storage</span><span style="color:#666666;">: </span><span style="color:#BD976A;">persistedState</span><span style="color:#666666;">.</span><span style="color:#BD976A;">sessionStorage</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#666666;">  },</span></span>
<span class="line"><span style="color:#666666;">})</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">defineStore</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">pinia</span><span style="color:#B56959AA;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1E754F;">export</span><span style="color:#AB5959;"> const </span><span style="color:#B07D48;">useStore</span><span style="color:#AB5959;"> = </span><span style="color:#59873A;">defineStore</span><span style="color:#999999;">(</span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">main</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">,</span><span style="color:#AB5959;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#59873A;">state</span><span style="color:#999999;">: () =&gt; {</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#1E754F;">return</span><span style="color:#999999;"> {</span></span>
<span class="line"><span style="color:#999999;">      </span><span style="color:#998418;">someState</span><span style="color:#999999;">: </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">hello pinia</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#999999;">    }</span></span>
<span class="line"><span style="color:#999999;">  },</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#998418;">persist</span><span style="color:#999999;">: {</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#998418;">storage</span><span style="color:#999999;">: </span><span style="color:#B07D48;">persistedState</span><span style="color:#999999;">.</span><span style="color:#B07D48;">sessionStorage</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#999999;">  },</span></span>
<span class="line"><span style="color:#999999;">})</span></span>
<span class="line"></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><code>sessionStorage</code> is client side only.</p></div><h3 id="cookieswithoptions" tabindex="-1"><code>cookiesWithOptions</code> <a class="header-anchor" href="#cookieswithoptions" aria-hidden="true">#</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">defineStore</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">pinia</span><span style="color:#C98A7DAA;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#CB7676;"> const </span><span style="color:#BD976A;">useStore</span><span style="color:#CB7676;"> = </span><span style="color:#80A665;">defineStore</span><span style="color:#666666;">(</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">main</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">,</span><span style="color:#CB7676;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#666666;">  </span><span style="color:#80A665;">state</span><span style="color:#666666;">: () =&gt; {</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#4D9375;">return</span><span style="color:#666666;"> {</span></span>
<span class="line"><span style="color:#666666;">      </span><span style="color:#B8A965;">someState</span><span style="color:#666666;">: </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">hello pinia</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#666666;">    }</span></span>
<span class="line"><span style="color:#666666;">  },</span></span>
<span class="line"><span style="color:#666666;">  </span><span style="color:#B8A965;">persist</span><span style="color:#666666;">: {</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#B8A965;">storage</span><span style="color:#666666;">: </span><span style="color:#BD976A;">persistedState</span><span style="color:#666666;">.</span><span style="color:#80A665;">cookiesWithOptions</span><span style="color:#666666;">({</span></span>
<span class="line"><span style="color:#666666;">      </span><span style="color:#B8A965;">sameSite</span><span style="color:#666666;">: </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">strict</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#666666;">    }),</span></span>
<span class="line"><span style="color:#666666;">  },</span></span>
<span class="line"><span style="color:#666666;">})</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">defineStore</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">pinia</span><span style="color:#B56959AA;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1E754F;">export</span><span style="color:#AB5959;"> const </span><span style="color:#B07D48;">useStore</span><span style="color:#AB5959;"> = </span><span style="color:#59873A;">defineStore</span><span style="color:#999999;">(</span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">main</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">,</span><span style="color:#AB5959;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#59873A;">state</span><span style="color:#999999;">: () =&gt; {</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#1E754F;">return</span><span style="color:#999999;"> {</span></span>
<span class="line"><span style="color:#999999;">      </span><span style="color:#998418;">someState</span><span style="color:#999999;">: </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">hello pinia</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#999999;">    }</span></span>
<span class="line"><span style="color:#999999;">  },</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#998418;">persist</span><span style="color:#999999;">: {</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#998418;">storage</span><span style="color:#999999;">: </span><span style="color:#B07D48;">persistedState</span><span style="color:#999999;">.</span><span style="color:#59873A;">cookiesWithOptions</span><span style="color:#999999;">({</span></span>
<span class="line"><span style="color:#999999;">      </span><span style="color:#998418;">sameSite</span><span style="color:#999999;">: </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">strict</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#999999;">    }),</span></span>
<span class="line"><span style="color:#999999;">  },</span></span>
<span class="line"><span style="color:#999999;">})</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Using <code>cookiesWithOptions()</code> allows you to <a href="https://nuxt.com/docs/api/composables/use-cookie#options" target="_blank" rel="noreferrer">configure cookies</a>. Passing no options is the same as using <code>cookies</code>, which is the default behavior.</p></div><h2 id="global-options" tabindex="-1">Global options <a class="header-anchor" href="#global-options" aria-hidden="true">#</a></h2><p>The module accepts some options defined in <code>nuxt.config.ts</code> under the <code>piniaPersistedstate</code> key:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">default</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">defineNuxtConfig</span><span style="color:#666666;">({</span></span>
<span class="line"><span style="color:#666666;">  </span><span style="color:#B8A965;">modules</span><span style="color:#666666;">: [</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">@pinia/nuxt</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">@pinia-plugin-persistedstate/nuxt</span><span style="color:#C98A7DAA;">&#39;</span></span>
<span class="line"><span style="color:#666666;">  ],</span></span>
<span class="line"><span style="color:#666666;">  </span><span style="color:#B8A965;">piniaPersistedstate</span><span style="color:#666666;">: {</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#B8A965;">cookieOptions</span><span style="color:#666666;">: {</span></span>
<span class="line"><span style="color:#666666;">      </span><span style="color:#B8A965;">sameSite</span><span style="color:#666666;">: </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">strict</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#666666;">    },</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#B8A965;">storage</span><span style="color:#666666;">: </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">localStorage</span><span style="color:#C98A7DAA;">&#39;</span></span>
<span class="line"><span style="color:#666666;">  },</span></span>
<span class="line"><span style="color:#666666;">})</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">default</span><span style="color:#393A34;"> </span><span style="color:#59873A;">defineNuxtConfig</span><span style="color:#999999;">({</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#998418;">modules</span><span style="color:#999999;">: [</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">@pinia/nuxt</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">@pinia-plugin-persistedstate/nuxt</span><span style="color:#B56959AA;">&#39;</span></span>
<span class="line"><span style="color:#999999;">  ],</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#998418;">piniaPersistedstate</span><span style="color:#999999;">: {</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#998418;">cookieOptions</span><span style="color:#999999;">: {</span></span>
<span class="line"><span style="color:#999999;">      </span><span style="color:#998418;">sameSite</span><span style="color:#999999;">: </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">strict</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#999999;">    },</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#998418;">storage</span><span style="color:#999999;">: </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">localStorage</span><span style="color:#B56959AA;">&#39;</span></span>
<span class="line"><span style="color:#999999;">  },</span></span>
<span class="line"><span style="color:#999999;">})</span></span>
<span class="line"></span></code></pre></div><ul><li><code>storage</code>: sets the storage used to persist by default (<code>&#39;localStorage&#39;</code>, <code>&#39;sessionStorage&#39;</code> or <code>&#39;cookies&#39;</code>).</li><li><code>cookieOptions</code>: default <a href="https://nuxt.com/docs/api/composables/use-cookie#options" target="_blank" rel="noreferrer">cookie options</a> (only used when persisting in cookies).</li><li><code>debug</code>: see <a href="/pinia-plugin-persistedstate/guide/config.html#debug"><code>debug</code></a>.</li></ul>`,24),e=[o];function t(c,r,i,y,A,d){return a(),n("div",null,e)}const B=s(p,[["render",t]]);export{u as __pageData,B as default};
