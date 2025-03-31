import SeeMoreButton from "../../../../components/molecules/CSeeMoreButton/CSeeMoreButton";

const NewFeeds = () => {
  return (
    <div className="bg-white shadow rounded-2xl p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">New Feeds</h2>
        <SeeMoreButton />
      </div>
      <div className="grid gap-3"></div>
    </div>
  );
};

export default NewFeeds;
