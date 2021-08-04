export default {
  name: "drama",
  title: "Drama",
  type: "document",
  fields: [
    {
      name: "dramatitle",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "dramatitle",
        maxLength: 100,
      },
    },
    {
      name: "noOfEpisodes",
      title: "Number of episodes",
      type: "number",
    },
    {
      name: "originalNetwork",
      title: "Original Network",
      type: "string",
    },
    {
      name: "firstReleased",
      title: "First Released Date",
      type: "date",
    },
    {
      name: "overview",
      title: "Overview",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "poster",
      title: "Poster Image",
      type: "image",
    },
    {
      name: "casts",
      title: "Casts in the drama",
      type: "array",
      of: [{ type: "cast" }],
    },
    {
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
};
