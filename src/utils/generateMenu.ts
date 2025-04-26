// import { ProgramAuthDTO } from "../types/dtos/auth.dto";


// const menuObj: { [key: string]: TPageMenuPathMappingItem } =
//   basePageMenuPathMappingList?.reduce(
//     (prev, cur) => {
//       return { ...prev, [cur.pageId]: cur };
//     },
//     {} as { [key: string]: TPageMenuPathMappingItem }
//   ) || {};

// const getMenuList = (
//   menuArr: (string | string[])[],
//   userPermission: { [key: string]: string[] },
//   parentData?: {
//     api?: string;
//   }
// ): TMenuList =>
//   menuArr?.reduce((prev, pageId) => {
//     const curPageId = typeof pageId === 'string' ? pageId : pageId[0];

//     const { path, label, icon, api, rights } = menuObj[curPageId];

//     if (rights && userPermission) {
//       const rules = userPermission[(api || parentData?.api) as string];
//       const isAccept = rights?.some((rule) => rules?.includes(rule));

//       if (isAccept)
//         return [
//           ...prev,
//           {
//             code: curPageId,
//             label: {
//               ko_KR: label?.ko_KR || '',
//               en_US: label?.en_US || ''
//             },
//             icon,
//             path: `${path}`,
//             api,
//             rights: rights as string[] | undefined,
//             children: typeof pageId === 'string' ? undefined : getMenuList(pageId.slice(1), userPermission, { api })
//           }
//         ];
//     } else {
//       const child = typeof pageId === 'string' ? undefined : getMenuList(pageId.slice(1), userPermission, { api });

//       if (typeof pageId === 'string' || (typeof pageId !== 'string' && child?.length))
//         return [
//           ...prev,
//           {
//             code: curPageId,
//             label: {
//               ko_KR: label?.ko_KR || '',
//               en_US: label?.en_US || ''
//             },
//             icon,
//             path: `${path}`,
//             api,
//             rights: rights as string[] | undefined,
//             children: child
//           }
//         ];
//     }

//     return prev;
//   }, [] as TMenuList);

// const generateMenu = (apiRights: ProgramAuthDTO[] | null): TMenuList => {
//   const userPermission: { [key: string]: string[] } =
//     apiRights?.reduce(
//       (prev, { programUrl, rights }) => {
//         return { ...prev, [programUrl as string]: rights?.split(',') as string[] };
//       },
//       {} as { [key: string]: string[] }
//     ) || {};

//   const userMenu = getMenuList(menuBase, userPermission);

//   return userMenu;
// };

// export default generateMenu;
