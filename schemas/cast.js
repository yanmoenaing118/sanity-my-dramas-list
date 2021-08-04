export default {
  name: "cast",
  title: "Cast",
  type: "object",
  fields: [
    {
      name: "characterName",
      title: "Character Name",
      type: "string",
    },
    {
      name: "person",
      title: "Actor",
      type: "reference",
      to: [{ type: "person" }],
    },
  ],
  preview: {
    select: {
      subtitle: "characterName",
      title: "person.name",
      media: "person.photo",
    },
  },
};
