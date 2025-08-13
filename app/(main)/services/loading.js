import CardSkleton from "@/app/(dashboard)/_components/ui-common/CardSkleton";

export default function Loading() {
  return (
    <div className="absolute top-1/2 left-1/2">
      <CardSkleton />
    </div>
  );
}
