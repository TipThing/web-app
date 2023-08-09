import ContentTemplate from '@/components/homepage/components/content';
import { SidebarNavigation } from '@/components/homepage/components/sidebar/sidebar-navigation';

export default function HomePageTemplate() {
  return (
    <section className="flex gap-x-8 h-full w-full">
      <div className="w-64 flex-shrink-0 bg-gray-900 h-full p-6 rounded-xl">
        <SidebarNavigation />
      </div>
      <div className="flex-1 h-full">
        <ContentTemplate />
      </div>
    </section>
  );
}
