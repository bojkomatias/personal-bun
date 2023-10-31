import { DashboardHeading } from "@/components/dashboard/heading";
import { DashboardContent } from "@/components/dashboard/wrapper";
import { NewBlogForm } from "@/modules/blog/new-blog-form";
import { dict } from "@/utils/dictionary";

export default function NewBlogPage() {
  return (
    <>
      <DashboardHeading title={dict.get("settings")} />
      <DashboardContent>
        <NewBlogForm />
      </DashboardContent>
    </>
  );
}
