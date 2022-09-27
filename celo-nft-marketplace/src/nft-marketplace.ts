import {
  ListingCanceled,
  ListingCreated,
  ListingPurchased,
  ListingUpdated,
} from "../generated/NFTMarketplace/NFTMarketplace";
import { store } from "@graphprotocol/graph-ts";
import { ListingEntity } from "../generated/schema";

export function handleListingCreated(event: ListingCreated): void { }

export function handleListingCancelled(event: ListingCanceled): void { }

export function handleListingPurchased(event: ListingPurchased): void { }

export function handleListingUpdated(event: ListingUpdated): void { }