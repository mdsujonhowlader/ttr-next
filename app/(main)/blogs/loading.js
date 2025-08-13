import CardSkleton from "@/app/(dashboard)/_components/ui-common/CardSkleton";

export default function LoadingBlog() {
  return (
    <>
      <div className="pt-40 w-xs mx-auto">
        <CardSkleton />
      </div>
    </>
  );
}
