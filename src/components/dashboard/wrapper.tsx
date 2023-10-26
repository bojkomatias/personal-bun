export const DashboardContent = (props: JSX.HtmlTag) => {
  return (
    <div class="max-w-8xl mx-auto space-y-8 px-2 sm:px-6 lg:px-16 xl:px-20">
      {props.children}
    </div>
  );
};
