const searchClient = algoliasearch('VDOL4AYORQ', 'de9251d81fdfbf7b41201a6aa8fcc238');

const search = instantsearch({
indexName: 'Email-Index',
searchClient,
});

search.addWidgets([
instantsearch.widgets.searchBox({
container: '#searchbox',
}),

instantsearch.widgets.configure({
hitsPerPage: 16
}),

instantsearch.widgets.hits({
container: '#hits',
templates: {
item: `
<div>
<div class="hit-name">
{{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}
</div>
</div>
`,
},
}),

instantsearch.widgets.pagination({
container: '#pagination',
}),
]);

search.start();
