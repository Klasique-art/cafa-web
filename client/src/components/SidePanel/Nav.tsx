import * as AccordionPrimitive from '@radix-ui/react-accordion';
import {
  AccordionContent,
  AccordionItem,
  TooltipAnchor,
  Accordion,
  Button,
} from '@librechat/client';
import type { NavLink, NavProps } from '~/common';
import { ActivePanelProvider, useActivePanel } from '~/Providers';
import { useLocalize } from '~/hooks';
import { cn } from '~/utils';
import { Link } from 'react-router-dom';
import { Shield, FileText } from 'lucide-react';

function NavContent({ links, isCollapsed, resize }: Omit<NavProps, 'defaultActive'>) {
  const localize = useLocalize();
  const { active, setActive } = useActivePanel();
  const getVariant = (link: NavLink) => (link.id === active ? 'default' : 'ghost');

  // Legal links data
  const legalLinks = [
    {
      to: '/privacy',
      title: 'Privacy Policy',
      icon: Shield,
      tooltip: 'Privacy Policy'
    },
    {
      to: '/terms',
      title: 'Terms & Conditions',
      icon: FileText,
      tooltip: 'Terms and Conditions'
    }
  ];

  return (
    <div
      data-collapsed={isCollapsed}
      className="bg-token-sidebar-surface-primary hide-scrollbar group flex-shrink-0 overflow-x-hidden"
    >
      <div className="h-full">
        <div className="flex h-full min-h-0 flex-col">
          <div className="flex h-full min-h-0 flex-col opacity-100 transition-opacity">
            <div className="scrollbar-trigger relative h-full w-full flex-1 items-start border-white/20">
              <div className="flex h-full w-full flex-col gap-1 px-3 py-2.5 group-[[data-collapsed=true]]:items-center group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
                {links.map((link, index) => {
                  const variant = getVariant(link);
                  return isCollapsed ? (
                    <TooltipAnchor
                      description={localize(link.title)}
                      side="left"
                      key={`nav-link-${index}`}
                      render={
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={(e) => {
                            if (link.onClick) {
                              link.onClick(e);
                              setActive('');
                              return;
                            }
                            setActive(link.id);
                            resize && resize(25);
                          }}
                        >
                          <link.icon className="h-4 w-4 text-text-secondary" />
                          <span className="sr-only">{localize(link.title)}</span>
                        </Button>
                      }
                    />
                  ) : (
                    <Accordion
                      key={index}
                      type="single"
                      value={active}
                      onValueChange={setActive}
                      collapsible
                    >
                      <AccordionItem value={link.id} className="w-full border-none">
                        <AccordionPrimitive.Header asChild>
                          <AccordionPrimitive.Trigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full justify-start bg-transparent text-text-secondary data-[state=open]:bg-surface-secondary data-[state=open]:text-text-primary"
                              onClick={(e) => {
                                if (link.onClick) {
                                  link.onClick(e);
                                  setActive('');
                                }
                              }}
                            >
                              <link.icon className="mr-2 h-4 w-4" />
                              {localize(link.title)}
                              {link.label != null && link.label && (
                                <span
                                  className={cn(
                                    'ml-auto opacity-100 transition-all duration-300 ease-in-out',
                                    variant === 'default' ? 'text-text-primary' : '',
                                  )}
                                >
                                  {link.label}
                                </span>
                              )}
                            </Button>
                          </AccordionPrimitive.Trigger>
                        </AccordionPrimitive.Header>

                        <AccordionContent className="w-full text-text-primary">
                          {link.Component && <link.Component />}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  );
                })}
                
                {/* Legal Links Section */}
                <div className="mt-auto pt-4 border-t border-white/10">
                  {isCollapsed ? (
                    // Collapsed state - icon buttons with tooltips
                    <div className="flex flex-col gap-1">
                      {legalLinks.map((legalLink) => (
                        <TooltipAnchor
                          key={legalLink.to}
                          description={legalLink.tooltip}
                          side="left"
                          render={
                            <Button
                              variant="ghost"
                              size="icon"
                              asChild
                              className="text-text-secondary hover:text-text-primary hover:bg-surface-secondary"
                            >
                              <Link to={legalLink.to}>
                                <legalLink.icon className="h-4 w-4" />
                                <span className="sr-only">{legalLink.tooltip}</span>
                              </Link>
                            </Button>
                          }
                        />
                      ))}
                    </div>
                  ) : (
                    // Expanded state - full buttons with text
                    <div className="flex flex-col gap-1">
                      {legalLinks.map((legalLink) => (
                        <Button
                          key={legalLink.to}
                          variant="ghost"
                          size="sm"
                          asChild
                          className="w-full justify-start text-text-secondary hover:text-text-primary hover:bg-surface-secondary transition-colors"
                        >
                          <Link to={legalLink.to}>
                            <legalLink.icon className="mr-2 h-4 w-4" />
                            {legalLink.title}
                          </Link>
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Nav({ links, isCollapsed, resize, defaultActive }: NavProps) {
  return (
    <ActivePanelProvider defaultActive={defaultActive}>
      <NavContent links={links} isCollapsed={isCollapsed} resize={resize} />
    </ActivePanelProvider>
  );
}