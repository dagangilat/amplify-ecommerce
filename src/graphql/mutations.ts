/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createCustomer = /* GraphQL */ `mutation CreateCustomer(
  $input: CreateCustomerInput!
  $condition: ModelCustomerConditionInput
) {
  createCustomer(input: $input, condition: $condition) {
    id
    email
    name
    phone_number
    shipping_address {
      street
      city
      state
      country
      __typename
    }
    billing_address {
      street
      city
      state
      country
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCustomerMutationVariables,
  APITypes.CreateCustomerMutation
>;
export const updateCustomer = /* GraphQL */ `mutation UpdateCustomer(
  $input: UpdateCustomerInput!
  $condition: ModelCustomerConditionInput
) {
  updateCustomer(input: $input, condition: $condition) {
    id
    email
    name
    phone_number
    shipping_address {
      street
      city
      state
      country
      __typename
    }
    billing_address {
      street
      city
      state
      country
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCustomerMutationVariables,
  APITypes.UpdateCustomerMutation
>;
export const deleteCustomer = /* GraphQL */ `mutation DeleteCustomer(
  $input: DeleteCustomerInput!
  $condition: ModelCustomerConditionInput
) {
  deleteCustomer(input: $input, condition: $condition) {
    id
    email
    name
    phone_number
    shipping_address {
      street
      city
      state
      country
      __typename
    }
    billing_address {
      street
      city
      state
      country
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCustomerMutationVariables,
  APITypes.DeleteCustomerMutation
>;
export const createProduct = /* GraphQL */ `mutation CreateProduct(
  $input: CreateProductInput!
  $condition: ModelProductConditionInput
) {
  createProduct(input: $input, condition: $condition) {
    id
    name
    description
    price
    image
    category
    stock
    brand
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateProductMutationVariables,
  APITypes.CreateProductMutation
>;
export const updateProduct = /* GraphQL */ `mutation UpdateProduct(
  $input: UpdateProductInput!
  $condition: ModelProductConditionInput
) {
  updateProduct(input: $input, condition: $condition) {
    id
    name
    description
    price
    image
    category
    stock
    brand
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateProductMutationVariables,
  APITypes.UpdateProductMutation
>;
export const deleteProduct = /* GraphQL */ `mutation DeleteProduct(
  $input: DeleteProductInput!
  $condition: ModelProductConditionInput
) {
  deleteProduct(input: $input, condition: $condition) {
    id
    name
    description
    price
    image
    category
    stock
    brand
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteProductMutationVariables,
  APITypes.DeleteProductMutation
>;
export const createOrder = /* GraphQL */ `mutation CreateOrder(
  $input: CreateOrderInput!
  $condition: ModelOrderConditionInput
) {
  createOrder(input: $input, condition: $condition) {
    id
    customerId
    createdAt
    status
    total
    shipping_address {
      street
      city
      state
      country
      __typename
    }
    items {
      productId
      quantity
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateOrderMutationVariables,
  APITypes.CreateOrderMutation
>;
export const updateOrder = /* GraphQL */ `mutation UpdateOrder(
  $input: UpdateOrderInput!
  $condition: ModelOrderConditionInput
) {
  updateOrder(input: $input, condition: $condition) {
    id
    customerId
    createdAt
    status
    total
    shipping_address {
      street
      city
      state
      country
      __typename
    }
    items {
      productId
      quantity
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateOrderMutationVariables,
  APITypes.UpdateOrderMutation
>;
export const deleteOrder = /* GraphQL */ `mutation DeleteOrder(
  $input: DeleteOrderInput!
  $condition: ModelOrderConditionInput
) {
  deleteOrder(input: $input, condition: $condition) {
    id
    customerId
    createdAt
    status
    total
    shipping_address {
      street
      city
      state
      country
      __typename
    }
    items {
      productId
      quantity
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteOrderMutationVariables,
  APITypes.DeleteOrderMutation
>;
export const createCart = /* GraphQL */ `mutation CreateCart(
  $input: CreateCartInput!
  $condition: ModelCartConditionInput
) {
  createCart(input: $input, condition: $condition) {
    id
    customerId
    createdAt
    items {
      productId
      quantity
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCartMutationVariables,
  APITypes.CreateCartMutation
>;
export const updateCart = /* GraphQL */ `mutation UpdateCart(
  $input: UpdateCartInput!
  $condition: ModelCartConditionInput
) {
  updateCart(input: $input, condition: $condition) {
    id
    customerId
    createdAt
    items {
      productId
      quantity
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCartMutationVariables,
  APITypes.UpdateCartMutation
>;
export const deleteCart = /* GraphQL */ `mutation DeleteCart(
  $input: DeleteCartInput!
  $condition: ModelCartConditionInput
) {
  deleteCart(input: $input, condition: $condition) {
    id
    customerId
    createdAt
    items {
      productId
      quantity
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCartMutationVariables,
  APITypes.DeleteCartMutation
>;
