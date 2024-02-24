var client = contentful.createClient({
    space: 'n4xlp6ev10ih',
    accessToken: 'uYR1oGphvCLeGanMqBdjsoGFd58qXfyxJMqNGh5LKzo',
  });


client.getEntries({content_type: 'assignment2',}).then(function (entries) {
  entries.items.forEach(function (entry) {
    console.log(entry.fields.name);
    console.log(entry.fields.link);
    console.log(entry.fields.image);
    console.log(entry.fields.description.content[0].content[0].value);
    console.log(entry.fields.projectAspects);
  });
});
