/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCustomerInput = {
  id?: string | null,
  email: string,
  name?: string | null,
  phone_number?: string | null,
  shipping_address?: AddressInput | null,
  billing_address?: AddressInput | null,
};

export type AddressInput = {
  street: string,
  city: string,
  state: string,
  country: string,
};

export type ModelCustomerConditionInput = {
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  phone_number?: ModelStringInput | null,
  and?: Array< ModelCustomerConditionInput | null > | null,
  or?: Array< ModelCustomerConditionInput | null > | null,
  not?: ModelCustomerConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Customer = {
  __typename: "Customer",
  id: string,
  email: string,
  name?: string | null,
  phone_number?: string | null,
  shipping_address?: Address | null,
  billing_address?: Address | null,
  createdAt: string,
  updatedAt: string,
};

export type Address = {
  __typename: "Address",
  street: string,
  city: string,
  state: string,
  country: string,
};

export type UpdateCustomerInput = {
  id: string,
  email?: string | null,
  name?: string | null,
  phone_number?: string | null,
  shipping_address?: AddressInput | null,
  billing_address?: AddressInput | null,
};

export type DeleteCustomerInput = {
  id: string,
};

export type CreateProductInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  price: number,
  image?: string | null,
  category?: string | null,
  stock: number,
  brand?: string | null,
};

export type ModelProductConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  image?: ModelStringInput | null,
  category?: ModelStringInput | null,
  stock?: ModelIntInput | null,
  brand?: ModelStringInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Product = {
  __typename: "Product",
  id: string,
  name: string,
  description?: string | null,
  price: number,
  image?: string | null,
  category?: string | null,
  stock: number,
  brand?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProductInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  price?: number | null,
  image?: string | null,
  category?: string | null,
  stock?: number | null,
  brand?: string | null,
};

export type DeleteProductInput = {
  id: string,
};

export type CreateOrderInput = {
  id?: string | null,
  customerId: string,
  createdAt?: string | null,
  status?: string | null,
  total: number,
  shipping_address?: AddressInput | null,
  items: Array< OrderItemInput >,
};

export type OrderItemInput = {
  productId: string,
  quantity: number,
};

export type ModelOrderConditionInput = {
  customerId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  status?: ModelStringInput | null,
  total?: ModelFloatInput | null,
  and?: Array< ModelOrderConditionInput | null > | null,
  or?: Array< ModelOrderConditionInput | null > | null,
  not?: ModelOrderConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Order = {
  __typename: "Order",
  id: string,
  customerId: string,
  createdAt: string,
  status?: string | null,
  total: number,
  shipping_address?: Address | null,
  items:  Array<OrderItem >,
  updatedAt: string,
};

export type OrderItem = {
  __typename: "OrderItem",
  productId: string,
  quantity: number,
};

export type UpdateOrderInput = {
  id: string,
  customerId?: string | null,
  createdAt?: string | null,
  status?: string | null,
  total?: number | null,
  shipping_address?: AddressInput | null,
  items?: Array< OrderItemInput > | null,
};

export type DeleteOrderInput = {
  id: string,
};

export type CreateCartInput = {
  id?: string | null,
  customerId: string,
  createdAt?: string | null,
  items: Array< CartItemInput >,
};

export type CartItemInput = {
  productId: string,
  quantity: number,
};

export type ModelCartConditionInput = {
  customerId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelCartConditionInput | null > | null,
  or?: Array< ModelCartConditionInput | null > | null,
  not?: ModelCartConditionInput | null,
};

export type Cart = {
  __typename: "Cart",
  id: string,
  customerId: string,
  createdAt: string,
  items:  Array<CartItem >,
  updatedAt: string,
};

export type CartItem = {
  __typename: "CartItem",
  productId: string,
  quantity: number,
};

export type UpdateCartInput = {
  id: string,
  customerId?: string | null,
  createdAt?: string | null,
  items?: Array< CartItemInput > | null,
};

export type DeleteCartInput = {
  id: string,
};

export type ModelCustomerFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  phone_number?: ModelStringInput | null,
  and?: Array< ModelCustomerFilterInput | null > | null,
  or?: Array< ModelCustomerFilterInput | null > | null,
  not?: ModelCustomerFilterInput | null,
};

export type ModelCustomerConnection = {
  __typename: "ModelCustomerConnection",
  items:  Array<Customer | null >,
  nextToken?: string | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  image?: ModelStringInput | null,
  category?: ModelStringInput | null,
  stock?: ModelIntInput | null,
  brand?: ModelStringInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product | null >,
  nextToken?: string | null,
};

export type ModelOrderFilterInput = {
  id?: ModelIDInput | null,
  customerId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  status?: ModelStringInput | null,
  total?: ModelFloatInput | null,
  and?: Array< ModelOrderFilterInput | null > | null,
  or?: Array< ModelOrderFilterInput | null > | null,
  not?: ModelOrderFilterInput | null,
};

export type ModelOrderConnection = {
  __typename: "ModelOrderConnection",
  items:  Array<Order | null >,
  nextToken?: string | null,
};

export type ModelCartFilterInput = {
  id?: ModelIDInput | null,
  customerId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelCartFilterInput | null > | null,
  or?: Array< ModelCartFilterInput | null > | null,
  not?: ModelCartFilterInput | null,
};

export type ModelCartConnection = {
  __typename: "ModelCartConnection",
  items:  Array<Cart | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionCustomerFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  phone_number?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCustomerFilterInput | null > | null,
  or?: Array< ModelSubscriptionCustomerFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionProductFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  image?: ModelSubscriptionStringInput | null,
  category?: ModelSubscriptionStringInput | null,
  stock?: ModelSubscriptionIntInput | null,
  brand?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProductFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionOrderFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  customerId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  total?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionOrderFilterInput | null > | null,
  or?: Array< ModelSubscriptionOrderFilterInput | null > | null,
};

export type ModelSubscriptionCartFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  customerId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCartFilterInput | null > | null,
  or?: Array< ModelSubscriptionCartFilterInput | null > | null,
};

export type CreateCustomerMutationVariables = {
  input: CreateCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type CreateCustomerMutation = {
  createCustomer?:  {
    __typename: "Customer",
    id: string,
    email: string,
    name?: string | null,
    phone_number?: string | null,
    shipping_address?:  {
      __typename: "Address",
      street: string,
      city: string,
      state: string,
      country: string,
    } | null,
    billing_address?:  {
      __typename: "Address",
      street: string,
      city: string,
      state: string,
      country: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCustomerMutationVariables = {
  input: UpdateCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type UpdateCustomerMutation = {
  updateCustomer?:  {
    __typename: "Customer",
    id: string,
    email: string,
    name?: string | null,
    phone_number?: string | null,
    shipping_address?:  {
      __typename: "Address",
      street: string,
      city: string,
      state: string,
      country: string,
    } | null,
    billing_address?:  {
      __typename: "Address",
      street: string,
      city: string,
      state: string,
      country: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCustomerMutationVariables = {
  input: DeleteCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type DeleteCustomerMutation = {
  deleteCustomer?:  {
    __typename: "Customer",
    id: string,
    email: string,
    name?: string | null,
    phone_number?: string | null,
    shipping_address?:  {
      __typename: "Address",
      street: string,
      city: string,
      state: string,
      country: string,
    } | null,
    billing_address?:  {
      __typename: "Address",
      street: string,
      city: string,
      state: string,
      country: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description?: string | null,
    price: number,
    image?: string | null,
    category?: string | null,
    stock: number,
    brand?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description?: string | null,
    price: number,
    image?: string | null,
    category?: string | null,
    stock: number,
    brand?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description?: string | null,
    price: number,
    image?: string | null,
    category?: string | null,
    stock: number,
    brand?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateOrderMutationVariables = {
  input: CreateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type CreateOrderMutation = {
  createOrder?:  {
    __typename: "Order",
    id: string,
    customerId: string,
    createdAt: string,
    status?: string | null,
    total: number,
    shipping_address?:  {
      __typename: "Address",
      street: string,
      city: string,
      state: string,
      country: string,
    } | null,
    items:  Array< {
      __typename: "OrderItem",
      productId: string,
      quantity: number,
    } >,
    updatedAt: string,
  } | null,
};

export type UpdateOrderMutationVariables = {
  input: UpdateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type UpdateOrderMutation = {
  updateOrder?:  {
    __typename: "Order",
    id: string,
    customerId: string,
    createdAt: string,
    status?: string | null,
    total: number,
    shipping_address?:  {
      __typename: "Address",
      street: string,
      city: string,
      state: string,
      country: string,
    } | null,
    items:  Array< {
      __typename: "OrderItem",
      productId: string,
      quantity: number,
    } >,
    updatedAt: string,
  } | null,
};

export type DeleteOrderMutationVariables = {
  input: DeleteOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type DeleteOrderMutation = {
  deleteOrder?:  {
    __typename: "Order",
    id: string,
    customerId: string,
    createdAt: string,
    status?: string | null,
    total: number,
    shipping_address?:  {
      __typename: "Address",
      street: string,
      city: string,
      state: string,
      country: string,
    } | null,
    items:  Array< {
      __typename: "OrderItem",
      productId: string,
      quantity: number,
    } >,
    updatedAt: string,
  } | null,
};

export type CreateCartMutationVariables = {
  input: CreateCartInput,
  condition?: ModelCartConditionInput | null,
};

export type CreateCartMutation = {
  createCart?:  {
    __typename: "Cart",
    id: string,
    customerId: string,
    createdAt: string,
    items:  Array< {
      __typename: "CartItem",
      productId: string,
      quantity: number,
    } >,
    updatedAt: string,
  } | null,
};

export type UpdateCartMutationVariables = {
  input: UpdateCartInput,
  condition?: ModelCartConditionInput | null,
};

export type UpdateCartMutation = {
  updateCart?:  {
    __typename: "Cart",
    id: string,
    customerId: string,
    createdAt: string,
    items:  Array< {
      __typename: "CartItem",
      productId: string,
      quantity: number,
    } >,
    updatedAt: string,
  } | null,
};

export type DeleteCartMutationVariables = {
  input: DeleteCartInput,
  condition?: ModelCartConditionInput | null,
};

export type DeleteCartMutation = {
  deleteCart?:  {
    __typename: "Cart",
    id: string,
    customerId: string,
    createdAt: string,
    items:  Array< {
      __typename: "CartItem",
      productId: string,
      quantity: number,
    } >,
    updatedAt: string,
  } | null,
};

export type GetCustomerQueryVariables = {
  id: string,
};

export type GetCustomerQuery = {
  getCustomer?:  {
    __typename: "Customer",
    id: string,
    email: string,
    name?: string | null,
    phone_number?: string | null,
    shipping_address?:  {
      __typename: "Address",
      street: string,
      city: string,
      state: string,
      country: string,
    } | null,
    billing_address?:  {
      __typename: "Address",
      street: string,
      city: string,
      state: string,
      country: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCustomersQueryVariables = {
  filter?: ModelCustomerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCustomersQuery = {
  listCustomers?:  {
    __typename: "ModelCustomerConnection",
    items:  Array< {
      __typename: "Customer",
      id: string,
      email: string,
      name?: string | null,
      phone_number?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description?: string | null,
    price: number,
    image?: string | null,
    category?: string | null,
    stock: number,
    brand?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      name: string,
      description?: string | null,
      price: number,
      image?: string | null,
      category?: string | null,
      stock: number,
      brand?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOrderQueryVariables = {
  id: string,
};

export type GetOrderQuery = {
  getOrder?:  {
    __typename: "Order",
    id: string,
    customerId: string,
    createdAt: string,
    status?: string | null,
    total: number,
    shipping_address?:  {
      __typename: "Address",
      street: string,
      city: string,
      state: string,
      country: string,
    } | null,
    items:  Array< {
      __typename: "OrderItem",
      productId: string,
      quantity: number,
    } >,
    updatedAt: string,
  } | null,
};

export type ListOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersQuery = {
  listOrders?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      customerId: string,
      createdAt: string,
      status?: string | null,
      total: number,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCartQueryVariables = {
  id: string,
};

export type GetCartQuery = {
  getCart?:  {
    __typename: "Cart",
    id: string,
    customerId: string,
    createdAt: string,
    items:  Array< {
      __typename: "CartItem",
      productId: string,
      quantity: number,
    } >,
    updatedAt: string,
  } | null,
};

export type ListCartsQueryVariables = {
  filter?: ModelCartFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCartsQuery = {
  listCarts?:  {
    __typename: "ModelCartConnection",
    items:  Array< {
      __typename: "Cart",
      id: string,
      customerId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCustomerSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerFilterInput | null,
};

export type OnCreateCustomerSubscription = {
  onCreateCustomer?:  {
    __typename: "Customer",
    id: string,
    email: string,
    name?: string | null,
    phone_number?: string | null,
    shipping_address?:  {
      __typename: "Address",
      street: string,
      city: string,
      state: string,
      country: string,
    } | null,
    billing_address?:  {
      __typename: "Address",
      street: string,
      city: string,
      state: string,
      country: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCustomerSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerFilterInput | null,
};

export type OnUpdateCustomerSubscription = {
  onUpdateCustomer?:  {
    __typename: "Customer",
    id: string,
    email: string,
    name?: string | null,
    phone_number?: string | null,
    shipping_address?:  {
      __typename: "Address",
      street: string,
      city: string,
      state: string,
      country: string,
    } | null,
    billing_address?:  {
      __typename: "Address",
      street: string,
      city: string,
      state: string,
      country: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCustomerSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerFilterInput | null,
};

export type OnDeleteCustomerSubscription = {
  onDeleteCustomer?:  {
    __typename: "Customer",
    id: string,
    email: string,
    name?: string | null,
    phone_number?: string | null,
    shipping_address?:  {
      __typename: "Address",
      street: string,
      city: string,
      state: string,
      country: string,
    } | null,
    billing_address?:  {
      __typename: "Address",
      street: string,
      city: string,
      state: string,
      country: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description?: string | null,
    price: number,
    image?: string | null,
    category?: string | null,
    stock: number,
    brand?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description?: string | null,
    price: number,
    image?: string | null,
    category?: string | null,
    stock: number,
    brand?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description?: string | null,
    price: number,
    image?: string | null,
    category?: string | null,
    stock: number,
    brand?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnCreateOrderSubscription = {
  onCreateOrder?:  {
    __typename: "Order",
    id: string,
    customerId: string,
    createdAt: string,
    status?: string | null,
    total: number,
    shipping_address?:  {
      __typename: "Address",
      street: string,
      city: string,
      state: string,
      country: string,
    } | null,
    items:  Array< {
      __typename: "OrderItem",
      productId: string,
      quantity: number,
    } >,
    updatedAt: string,
  } | null,
};

export type OnUpdateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnUpdateOrderSubscription = {
  onUpdateOrder?:  {
    __typename: "Order",
    id: string,
    customerId: string,
    createdAt: string,
    status?: string | null,
    total: number,
    shipping_address?:  {
      __typename: "Address",
      street: string,
      city: string,
      state: string,
      country: string,
    } | null,
    items:  Array< {
      __typename: "OrderItem",
      productId: string,
      quantity: number,
    } >,
    updatedAt: string,
  } | null,
};

export type OnDeleteOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnDeleteOrderSubscription = {
  onDeleteOrder?:  {
    __typename: "Order",
    id: string,
    customerId: string,
    createdAt: string,
    status?: string | null,
    total: number,
    shipping_address?:  {
      __typename: "Address",
      street: string,
      city: string,
      state: string,
      country: string,
    } | null,
    items:  Array< {
      __typename: "OrderItem",
      productId: string,
      quantity: number,
    } >,
    updatedAt: string,
  } | null,
};

export type OnCreateCartSubscriptionVariables = {
  filter?: ModelSubscriptionCartFilterInput | null,
};

export type OnCreateCartSubscription = {
  onCreateCart?:  {
    __typename: "Cart",
    id: string,
    customerId: string,
    createdAt: string,
    items:  Array< {
      __typename: "CartItem",
      productId: string,
      quantity: number,
    } >,
    updatedAt: string,
  } | null,
};

export type OnUpdateCartSubscriptionVariables = {
  filter?: ModelSubscriptionCartFilterInput | null,
};

export type OnUpdateCartSubscription = {
  onUpdateCart?:  {
    __typename: "Cart",
    id: string,
    customerId: string,
    createdAt: string,
    items:  Array< {
      __typename: "CartItem",
      productId: string,
      quantity: number,
    } >,
    updatedAt: string,
  } | null,
};

export type OnDeleteCartSubscriptionVariables = {
  filter?: ModelSubscriptionCartFilterInput | null,
};

export type OnDeleteCartSubscription = {
  onDeleteCart?:  {
    __typename: "Cart",
    id: string,
    customerId: string,
    createdAt: string,
    items:  Array< {
      __typename: "CartItem",
      productId: string,
      quantity: number,
    } >,
    updatedAt: string,
  } | null,
};
