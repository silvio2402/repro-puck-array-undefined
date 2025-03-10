import type { Config } from "@measured/puck";

type Props = {
  HeadingBlock: { title: string };
  Example: { items: { title: string }[] };
};

export const config: Config<Props> = {
  components: {
    HeadingBlock: {
      fields: {
        title: { type: "text" },
      },
      defaultProps: {
        title: "Heading",
      },
      render: ({ title }) => (
        <div style={{ padding: 64 }}>
          <h1>{title}</h1>
        </div>
      ),
    },
    Example: {
      fields: {
        items: {
          type: "array",
          arrayFields: {
            title: { type: "text" },
          },
        },
      },
      render: ({ items }) => {
        return (
          <ul>
            {items.map((item, i) => (
              <li key={i}>{item.title}</li>
            ))}
          </ul>
        );
      },
    },
  },
};

export default config;
