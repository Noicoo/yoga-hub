# Yoga Hub

Based on the Create react app

## Code style

- max 1 nested directory in components/screens:

good:

```
screens
    AuctionDetails
        AuctionInfo
        AuctionInfoItem
```

bad:

```
screens
    AuctionDetails
        AuctionInfo
            AuctionInfoItem
```

- division between pure components and containers, only containers can access state/hooks, components must be pure
- only one file per directory with default export meant to be accessible from the outside, named `index.tsx` in componens/containers
- keep styles in Styled Components stylesheets. No passing styler related pops in components.
