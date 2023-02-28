import ExternalLink from "./ExternalLink";

export const Default = () => {
  return (
    <div className="flex gap-x-4">
      <ExternalLink className="text-red-500" href="https://www.google.com">
        External Link
      </ExternalLink>
    </div>
  );
};
