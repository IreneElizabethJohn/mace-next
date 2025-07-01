import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";

export default function SinglePage() {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex flex-col lg:flex-row gap-16">
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product name</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetuiis atqueserunt quis quia, rem
          obcaecati quidem voluptates?
        </p>
        <div className="h-[2px] bg-gray-100"></div>
        <div className="flex items-center gap-4">
          <h3 className="text-xl line-through text-gray-500">$59</h3>
          <h2 className="text-2xl font-medium">$49</h2>
        </div>
        <div className="h-[2px] bg-gray-100">
          <CustomizeProducts />
          <Add />

          <div className="h-[2px] bg-gray-100 mt-4">
            <div class="text-sm">
              <h4 className="mb-4 font-medium">Title</h4>
              <p>
                Lorem ipsum dolor sit amet consectetuiis atqueserunt quis quia,
                rem obcaecati quidem voluptsSates?
              </p>
            </div>
            <div class="text-sm">
              <h4 className="mb-4 font-medium">Title</h4>
              <p>
                Lorem ipsum dolor sit amet consectetuiis atqueserunt quis quia,
                rem obcaecati quidem voluptsSates?
              </p>
            </div>
            <div class="text-sm">
              <h4 className="mb-4 font-medium">Title</h4>
              <p>
                Lorem ipsum dolor sit amet consectetuiis atqueserunt quis quia,
                rem obcaecati quidem voluptsSates?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
