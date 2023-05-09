'use client'
import { useRefinementList, type RefinementListProps } from 'react-instantsearch-hooks-web';

import { CategoryBadge } from '@/components/server-components/Buttons/CategoryBadge'

export const ArticleRefinementSelector = (props: RefinementListProps) => {

  const { items, refine } = useRefinementList(props)

  return (
    <div>
          <p className="text-primary font-bold" id='facet-instructions'>
              Tap a category to filter learning material:
          </p>
            <div className="flex flex-wrap pt-2" id='facet-container'>
            {items.map((item: any) => (             
                  item.isRefined ? (<div key={item.label}></div>
                  ) : (
                    <CategoryBadge
                      name={item.label}
                      key={item.label}
                      onClick= {() => refine(item.value)}
                    />
                  )       
            ))}
            </div>
    </div>
  )
}
                  